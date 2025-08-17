import { SITE } from './config';

export async function revalidatePath(path: string) {
  try {
    const token = process.env.REVALIDATE_TOKEN;
    if (!token) {
      throw new Error('REVALIDATE_TOKEN is not set');
    }

    const res = await fetch(
      `${SITE.siteUrl}/api/revalidate?secret=${token}&path=${path}`,
      { method: 'GET' }
    );

    if (!res.ok) {
      throw new Error(`Failed to revalidate: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Revalidation error:', error);
    throw error;
  }
}

export async function revalidateTag(tag: string) {
  try {
    const token = process.env.REVALIDATE_TOKEN;
    if (!token) {
      throw new Error('REVALIDATE_TOKEN is not set');
    }

    const res = await fetch(
      `${SITE.siteUrl}/api/revalidate?secret=${token}&tag=${tag}`,
      { method: 'GET' }
    );

    if (!res.ok) {
      throw new Error(`Failed to revalidate: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Revalidation error:', error);
    throw error;
  }
}
