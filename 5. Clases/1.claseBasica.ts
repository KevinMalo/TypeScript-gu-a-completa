class Tesla {
    // propiedades publicas, privadas y protegidas solo existen en TS
    public model: string;
    protected autopilot: boolean = true; // solo puede ser modificado dentro de la misma clase o herencias
    private security: number; // solo puede ser modificado dentro de la misma clase
    room: number = 4;

    constructor( model: string,
        autopilot: boolean,
        security: number ) {

        console.log('Constructor works');
        this.model = model;
        this.autopilot = autopilot;
        this.security = security;
        
    }

    public all():void {
        let txt: string = `Model: ${this.model}
        Autopilot: ${this.autopilot} 
        Security: ${this.security}
        Room: ${this.room}`;
        console.log(txt);
    }

}

let model3: Tesla = new Tesla( 'Model 3', true, 3 );

console.log(model3);

model3.all();