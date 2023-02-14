class NeuralNetwork
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
            outputs = level.feedForward(
                outputs,
                network.levels[i]
            );
        }
        return outputs;
    }

    static mutate(network, amount = 1)
    {
        network.levels.forEach(level => {
            for (let i = 0; i < level.biases.length; i++)
            {
                level.biases[i] = lerp(
                    level.biases[i],
                    Math.random() * 2 - 1,
                    amount
                )
            }
            for ( let i = 0; i < level.weights.length; i++)
            {
                for (let j = 0; j < level.weights[i].length; j++)
                {
                    level.weights[i][j] = lerp(
                        level.weights[i][j],
                        Math.random() * 2 - 1,
                        amount
                    )
                }
            }
        });
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

        level.#randomize(this);
    }

    static #randomize(level)
    {
        for (let i = 0; i < level.inputs.length; i++)
        {
            for (let j = 0; j < level.outputs.length; j++)
            {
                level.weights[i][j] = Math.random() * 2 - 1;
            }
        }
        for (let i = 0; i < level.biases.length;i++)
        {
            level.biases[i] = Math.random() * 2 - 1;
        }
    }


    static feedForward(inputs, level)
    {
        for (let i = 0; i < level.inputs.length; i++)
        {
            level.inputs[i] = inputs[i];
        }

        for (let i = 0; i < level.outputs.length; i++)
        {
            let sum = 0;
            for (let j = 0; j < level.inputs.length; j++)
            {
                sum += level.inputs[j] * level.weights[j][i];
            }

            if (sum > level.biases[i])
            {
                level.outputs[i] = 1;
            }
            else{
                level.outputs[i] = 0;
            }
        }

        return level.outputs;
    }

}