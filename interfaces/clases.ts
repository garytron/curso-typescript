(() => {
  interface Xmen {
    name: string,
    realName: string;
    mutantPower( id:number ): string;
  }

  interface Human {
    age: number;
  }

  class Mutant implements Xmen{
    public age: number;
    public name: string;
    public realName: string;

    mutantPower() {
      return this.name + ' ' + this.realName;
    }
  }
})()