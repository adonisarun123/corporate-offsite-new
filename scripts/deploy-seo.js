import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const copyDirectory = (src, dest) => {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true })
  }

  const entries = fs.readdirSync(src, { withFileTypes: true })

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name)
    const destPath = path.join(dest, entry.name)

    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath)
    } else {
      fs.copyFileSync(srcPath, destPath)
    }
  }
}

const deploySEO = () => {
  const distDir = path.join(__dirname, '../dist')
  const prerenderDir = path.join(__dirname, '../dist-prerender')

  console.log('🚀 Starting SEO deployment process...')

  // Check if prerender directory exists
  if (!fs.existsSync(prerenderDir)) {
    console.error('❌ Prerender directory not found. Run "npm run prerender" first.')
    process.exit(1)
  }

  // Check if dist directory exists
  if (!fs.existsSync(distDir)) {
    console.error('❌ Dist directory not found. Run "npm run build" first.')
    process.exit(1)
  }

  // Copy prerendered files to dist
  console.log('📋 Copying prerendered SEO files to dist...')
  
  // Copy all prerendered files
  copyDirectory(prerenderDir, distDir)

  // Ensure the main SPA files are preserved
  const mainIndexPath = path.join(__dirname, '../index.html')
  if (fs.existsSync(mainIndexPath)) {
    const distIndexPath = path.join(distDir, 'index.html')
    
    // Read the main index.html
    const mainIndexContent = fs.readFileSync(mainIndexPath, 'utf8')
    
    // Update it with proper asset paths
    const updatedContent = mainIndexContent.replace(
      '<script type="module" src="/src/main.jsx"></script>',
      ''
    )
    
    // Only overwrite if we don't have a custom homepage
    if (!fs.existsSync(path.join(prerenderDir, 'index.html'))) {
      fs.writeFileSync(distIndexPath, updatedContent)
    }
  }

  console.log('✅ SEO deployment complete!')
  console.log('📁 Ready to deploy the dist/ folder')
  console.log('\n🔍 Verification:')
  console.log('- Check that dist/destinations/bangalore/venues/itc-windsor-bangalore/index.html exists')
  console.log('- Ensure it has venue-specific meta tags')
  
  // Verify a few key files
  const testFiles = [
    'destinations/bangalore/venues/itc-windsor-bangalore/index.html',
    'activities/leadership-challenge-course/index.html',
    'destinations/bangalore/index.html'
  ]
  
  testFiles.forEach(file => {
    const filePath = path.join(distDir, file)
    if (fs.existsSync(filePath)) {
      console.log(`✅ ${file} - Found`)
    } else {
      console.log(`❌ ${file} - Missing`)
    }
  })
}

deploySEO()
