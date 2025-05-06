export function optional<T>(enabled: boolean, object: T): Array<T> {
  return enabled ? [object] : []
}
