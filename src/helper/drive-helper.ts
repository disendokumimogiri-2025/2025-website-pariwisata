/* eslint-disable @typescript-eslint/no-unused-vars */

export function getDriveId(url: string): string {
  try {
    url = url.trim();

    const match1 = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (match1 && match1[1]) {
      return match1[1];
    }

    const match2 = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    if (match2 && match2[1]) {
      return match2[1];
    }

    const match3 = url.match(/drive\/folders\/([a-zA-Z0-9_-]+)/);
    if (match3 && match3[1]) {
      return match3[1];
    }

    return '1H7Kf7O_TU8s9hvY1aFxiCxxQ5EAwJIlX';
  } catch (_err) {
    return '1H7Kf7O_TU8s9hvY1aFxiCxxQ5EAwJIlX';
  }
}

export function getRenderableDriveLink(id: string | null | undefined): string {
  if (!id)
    return "https://drive.google.com/thumbnail?id=1H7Kf7O_TU8s9hvY1aFxiCxxQ5EAwJIlX&sz=w600";

  return `https://drive.google.com/thumbnail?id=${id}&sz=w2000`;
  
}
