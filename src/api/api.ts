export async function get(url : string) : Promise<any> {
    const res = await fetch(url);
    return res.json()
}