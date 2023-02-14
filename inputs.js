class inputs{
    constructor()
    {
        // 1 is rock
        // 2 is paper
        // 3
        this.combinations[3][3][3];
        this.combinations[3][3][3][3][3];
        this.freq.rock = 0;
        this.freq.paper = 0;
        this.freq.scissors = 0;

        this.rock = 0;
        this.paper = 0;
        this.scissors = 0;
        freqUpdate()
    }

    freqUpdate()
    {
        this.freq.rock = rock / total;
        this.freq.paper = paper / total;
        this.freq.scissors = scissors / total;
    }
}
    // const offsets = touches.map(e=>e.offset);
    // const minOffset = Math.min(...offsets);
    // return touches.find(e=>e.offset == minOffset);