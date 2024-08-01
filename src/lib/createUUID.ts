export default function createUUID({ prefix } : { prefix: string }) {
  return `${prefix}_${crypto.randomUUID()}`
}