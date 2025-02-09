export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-21'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  'sk8p5KlIMBWwae7lXGWsdL8MJHOA2YbK559v1ZnXGyw39nxq1j0GTyTau0KlglPeaxegfkos9ihMp79aLvxa6fL5U8ef2iDGMZZUftFjYfaXUdqTofSyfvaQWu7cZ8xODmDvQQ1LeSHhDQrc6hYO1h962Ad3xnffDoZSdgGQrwA6cevZrhQI',
  'Missing environment variable: SANITY_API_TOKEN'
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
