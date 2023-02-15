class brain
{
    constructor()
    {
        this.brain = new NeuralNetwork(
            [12,8,3]
        )
    }
    idk()
    {
        const offsets = this.sensor.readings.map(
        )
                // offsets is the values of each value
<<<<<<< HEAD
        const outputs = NeuralNetwork.feedForward(input.share(),this.brain);
=======
        const outputs = NeuralNetwork.feedForward(,this.brain);
>>>>>>> ffbbdbd28266cf81b3d6f49053d5c1284c87aed4
            
            this.rock = outputs[0];
            this.paper = outputs[1];
            this.scissors = outputs[2];
    }
}