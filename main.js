// number of brains
const N = 1;
const V = 0.01;

const brains = generateBrains(N);
// load the previous brains to array
const input = new inputs



function generateBrains(N)
{
    const brains = [];
    for (let i = 0; i <= N; i++)
    {
        brains.push(new brain())
    }
    return brains;
}