class brain
{
    constructor()
    {
        this.brain = new NeuralNetwork(
            [12,8,3]
        )
    }
    update(roadBorders,traffic){

        const offsets = this.sensor.readings.map(
            s=>s==null?0:1-s.offset
        )
                // offsets is the values of each value
        const outputs = NeuralNetwork.feedForward(offsets,this.brain);
            
            this.rock = outputs[0];
            this.paper = outputs[1];
            this.scissors = outputs[2];
    }
}