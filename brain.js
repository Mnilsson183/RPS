class brain
{
    constructor(neuronCount)
    {
        for (let i = 0; i < neuronCount.length; i++)
        {
            this.levels.push(new level(
                neuronCount[i],
                neuronCount[i + 1]
            ));
        }
    }


    static feedForward(inputs, network)
    {
        let outputs = level.feedForward(
            inputs, network.levels[0]
        );
        for (let i = 0; i < network.levels.length; i++)
        {
            outputs = level
        }
    }




}
class level
{
    constructor(inputCount, outputCount)
    {
        this.inputs = new Array(inputCount);
        this.inputs = new Array(outputCount);
        this.biases = new Array(outputCount);

        this.weights = [];
        for (let i = 0; i < inputCount; i++)
        {
            this.weights[i] = new Array(outputCount);
        }

        level.#randomize(this)
    }
}