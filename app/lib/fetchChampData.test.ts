import fetchChampData from './fetchChampData';


test('fetchChampData returns an array of ChampType', async () => {
    const data = await fetchChampData();
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBeGreaterThan(0);
    expect(data[0]).toHaveProperty('name');
    expect(data[0]).toHaveProperty('tier');
    expect(data[0]).toHaveProperty('image');
});