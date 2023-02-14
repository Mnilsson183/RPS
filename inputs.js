class inputs{
    constructor()
    {
        // 1 is rock
        // 2 is paper
        // 3
        this.combinations.three[0][0][0];
        this.combinations.five[0][0][0][0][0];
        this.freq.rock = 0;
        this.freq.paper = 0;
        this.freq.scissors = 0;

        this.rock = 0;
        this.paper = 0;
        this.scissors = 0;
    }

    Update(first,second,third,fourth,fifth)
    {
        this.combinations.three[third][fourth][fifth]++;
        this.combinations.five[first][second][third][fourth][fifth]++;
        this.freq.rock = rock / total;
        this.freq.paper = paper / total;
        this.freq.scissors = scissors / total;
    }
    freqUpdate()
    {
        this.freq.rock = rock / total;
        this.freq.paper = paper / total;
        this.freq.scissors = scissors / total;
        this.freq.three[third][fourth][fifth] = this.combinations.five[third][fourth][fifth] / total;
        this.freq.five[first][second][third][fourth][fifth] = this.combinations.five[first][second][third][fourth][fifth] / total;
    }

    share()
    {
        values = [];
        values[0] = this.freq.rock;
        values[1] = this.freq.paper;
        values[2] = this.freq.scissors;
        for (let i = 1; i < 4; i++)
        {
            for (let j = 1; j < 4; i++)
            {
                for (let n = 1; n < 4; n++)
                {
                    values[i + j + n] = this.freq.three[n][j][i];
                    for (let e = 1; e < 4; e++)
                    {
                        for (let a = 1; a < 4; a++)
                        {
                            values[i + j + n + e + a] = this.freq.three[a][e][n][j][i];
                        }
                    }
                }
            }
        }
        return values;
    }

    store()
    {
        // idk yet
    }
}