import { describe, it, expect } from 'vitest';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { HERO_WALL, FINAL_PEEK } from './creatives';

describe('creatives catalogue', () => {
  it('hero wall has ten columns of four tiles, each starting above the wall', () => {
    expect(HERO_WALL).toHaveLength(10);
    for (const col of HERO_WALL) {
      expect(col.tiles).toHaveLength(4);
      expect(col.offset).toBeLessThan(0);
    }
  });

  it('final CTA peek row has seven ads', () => {
    expect(FINAL_PEEK).toHaveLength(7);
  });

  it('every catalogued file exists in public/', () => {
    for (const src of [...HERO_WALL.flatMap((c) => c.tiles.map((t) => t.src)), ...FINAL_PEEK]) {
      expect(existsSync(join('public', src)), src).toBe(true);
    }
  });
});

/* Every image path written as a literal anywhere in the pages and sections
   ('/landing/...', '/creatives/...', '/loopy-logo.png') must be on disk. */
function sourceFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return sourceFiles(path);
    return /\.tsx?$/.test(name) && !name.endsWith('.test.ts') ? [path] : [];
  });
}

describe('landing image paths', () => {
  const files = ['app', 'components', 'lib'].flatMap(sourceFiles);
  const paths = new Set(
    files.flatMap((file) =>
      [...readFileSync(file, 'utf8').matchAll(/['"`](\/[\w./-]+\.(?:png|jpe?g|svg|webp))['"`]/g)].map((m) => m[1]),
    ),
  );

  it('finds the landing images', () => {
    expect(paths.has('/landing/svens-logo.png')).toBe(true);
    expect(paths.size).toBeGreaterThan(40);
  });

  it('every referenced image exists in public/', () => {
    for (const src of paths) expect(existsSync(join('public', src)), src).toBe(true);
  });
});

describe('brief template download', () => {
  it('ships the static Markdown file linked from TemplateTabs', () => {
    expect(existsSync(join(process.cwd(), 'public', 'ad-creative-brief-template.md'))).toBe(true);
  });
});
