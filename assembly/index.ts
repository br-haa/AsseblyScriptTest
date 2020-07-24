export function isPrime(x: u32): bool {
  if (x < 2) {
    return false;
  }

  for (let i: u32 = 2; i < x; i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
}

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export const hi: string = 'hi'

export function bye(): bool {
    return true
}