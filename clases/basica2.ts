(() => {
  class Avenger {
    static avgAge: number = 35;
    static getAvgAge() {
      return this.name;
    }

    constructor( 
      private name: string, 
      private team: string, 
      public realName?: string
    ) {}

    public bio(): string {
      return `${ this.name } (${ this.team })`;
    }
  }

  const antMan: Avenger = new Avenger('Antman', 'Team Capitan');

  console.log(Avenger.getAvgAge());
  console.log(antMan.bio());
})()