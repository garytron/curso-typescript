(() => {
  class Avenger {
    constructor(
      public name: string,
      public realName: string,
    ){
      console.log('Constructor Avenger llamado!');
    }

    get fullName(){
      return `${ this.name } - ${ this.realName }`;
    }

    set fullName(name: string){
      this.name = name;
    }

    protected getFullName() {
      return `${ this.name } ${ this.realName }`;
    }
  }

  class Xmen extends Avenger {

    constructor(
      name: string,
      realName: string,
      public isMutant: boolean
    ){
      super(name, realName);
      console.log('Constructor Xmen llamado!');
    }

    getFullNameFromXmen(){
      return console.log(super.getFullName());
    }
  }

  const wolverine = new Xmen('Wolverine', 'Logan', true);

  console.log(wolverine);
  wolverine.getFullNameFromXmen();
  wolverine.fullName;
  wolverine.fullName = 'W';


})()