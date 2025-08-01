import { expect, test } from "vitest";
import { HiAnime } from "../../src";

// npx vitest run episodeServers.test.ts
test("returns episode source servers", async () => {
    const hianime = new HiAnime.Scraper();
    const data = await hianime.getEpisodeSources("steinsgate-0-92?ep=2055", 'hd-1', 'sub');

    expect(data.sources).not.toEqual(null);
});