class Bootloader extends Phaser.Scene{
    constructor(){
        super({
            key: "Bootloader"
        });
        
    }

    init() {
        this.sel = 0;
        this.repetir = 0;
        console.log("Escena Bootloader");
    }
    
    preload() {
        this.load.path = "./assets/";
        this.load.image(["yoshif", "yoshi"]);
        this.load.image("fondo", "fondo.jpg");
        this.load.image("logo", "Logo1.png");
        this.load.image("start","start.png");
        this.load.image("start1","start1.png");
        this.load.image("choose","choose.png");
        this.load.image("Lata", "Lata.png")

        this.load.atlas('chavabros','chava_atlas/chava.png','chava_atlas/chava_atlas.json');
        this.load.atlas('planta','planta_atlas/planta.png','planta_atlas/planta_atlas.json');
        this.load.atlas('sol','sol_atlas/sol.png','sol_atlas/sol_atlas.json');
        this.load.atlas('roboto','roboto_atlas/roboto.png','roboto_atlas/roboto_atlas.json');
        this.load.atlas('tomato', 'tomato_atlas/tomato.png','tomato_atlas/tomato_atlas.json');
        this.load.animation('tomatoAnim', 'tomato_atlas/tomato_anim.json');
        //this.load.animation('chavaAnim', 'chava_atlas/chava_anim.json');

        this.load.audio("intro","intro.mp3");
        this.load.audio("start","start.mp3");
        this.load.audio("poder","poder.mp3");
        this.load.audio("super","super.mp3");
        this.load.audio("fire","fire1.mp3");
        this.load.audio("hello","hello.mp3");
        this.load.audio("planta","planta.mp3");
        this.load.audio("roboto","roboto.mp3");

        this.load.spritesheet('p1', 'p1.png', {
            frameWidth: 20,
             frameHeight: 20
            });

        this.load.spritesheet('p2', 'p2.png', {
            frameWidth: 22,
            frameHeight: 21
            });

        this.load.spritesheet('p3', 'p3.png', {
            frameWidth: 20,
            frameHeight: 20
            });

        this.load.spritesheet('p4', 'p4.png', {
            frameWidth: 21,
            frameHeight: 21
            });
            
    }

    
    
    create() {

        
        //this.tomato = this.add.sprite(100, 100, 'tomato', 3).setScale(4);
        //this.tomato_spacing = this.add.sprite(300, 100, 'tomato_spacing', 3).setScale(4);
        this.intros = this.sound.add("intro",{volume: 0.6});
        this.intros.play();
        this.intros.loop =true;
        this.starts = this.sound.add("start",{volume: 1.5});
       // this.ruta.loop =true;
        this.poders = this.sound.add("poder",{volume: 1.5});
       // this.ruta.loop =true;
        this.supers = this.sound.add("super",{volume: 1.5});
       // this.ruta.loop =true;
        this.hellos = this.sound.add("hello",{volume: 2});
       // this.ruta.loop =true;
        this.fires = this.sound.add("fire",{volume: 1.5});
       // this.ruta.loop =true;
        this.plantas = this.sound.add("planta",{volume: 1.5});
        this.robotos = this.sound.add("roboto",{volume: 1.5});


        this.p1= this.add.sprite(100, 160, 'p1', 0).setScale(4);
        this.p1.setInteractive();
        this.p1.setVisible(0);

        this.p2= this.add.sprite(195, 160, 'p2', 0).setScale(4);
        this.p2.setInteractive();
        this.p2.setVisible(0);

        this.p3= this.add.sprite(100, 255, 'p3', 1).setScale(4);
        this.p3.setInteractive();
        this.p3.setVisible(0);

        this.p4= this.add.sprite(195, 255, 'p4', 1).setScale(4);
        this.p4.setInteractive();
        this.p4.setVisible(0);
        
       
        this.chavabros = this.add.sprite(500,260,'chavabros').setScale(6);
        this.chavabros.setVisible(0);

        this.planta = this.add.sprite(500,260,'planta').setScale(6);
        this.planta.setVisible(0);

        this.sol = this.add.sprite(500,260,'sol').setScale(6);
        this.sol.setVisible(0);

        this.roboto = this.add.sprite(500,260,'roboto').setScale(6);
        this.roboto.setVisible(0);
        //this.tomato = this.add.sprite(100, 100, 'tomato').setScale(4);
        this.fondo = this.add.image(0,0, 'fondo');
        this.fondo.setOrigin(0,0);
        this.fondo.setDepth(-2);
        //this.logo = this.add.sprite(320,170,'logo').setScale(1.7);
        this.logo = this.add.sprite(320,145,'logo').setScale(1.7);
        this.start = this.add.image(320,260,"start").setInteractive();
        this.start.setScale(0.4);
        this.start1 = this.add.image(340,300,"start1").setInteractive();
        this.start1.setScale(0.4);
        this.start1.setVisible(0);
        this.choose = this.add.image(320,60, "choose").setScale(0.5);
        this.choose.setDepth(-1);
        this.choose.setVisible(0);


        
        //this.yoshif = this.add.sprite(300,100,'yoshif');
        // console.log(this.anims.generateFrameNumbers('tomato_spacing', {
        //     start: 0,
        //     end: 7
        //     }));
            //   this.anims.create({
            //     key: 'tomato_walk',
            //     frames: this.anims.generateFrameNames('tomato', {
            //     prefix: 'animacion_tomato_1_',
            //     start: 0,
            //     end: 7
            //                 }),
            //     repeat: -1,
            //     frameRate: 10
            // });


            this.tweens = this.add.tween({
                targets: [this.logo, /*this.yoshif*/],
                ease: 'Bounce',
                y: 185,
                // x: {
                //     value: 200,
                //     ease: 'Elastic',
                //     duration: 3000
                //     },
                repeat: -1,
                duration: 1000,
                yoyo:true
            });

//ASIGNACION DE NOMBRES
this.start.name = "start";
this.p1.name = "p1";
this.p2.name = "p2";
this.p3.name = "p3";
this.p4.name = "p4";
this.start1.name = "start1";
//SELECCION DE PERSONAJE
const eventos = Phaser.Input.Events;
const keyCodes = Phaser.Input.Keyboard.KeyCodes;
console.log(this.sel);
this.input.on(eventos.GAMEOBJECT_DOWN, (pointer, GameObject) =>
        {
            if(GameObject.name != "")
                if(GameObject.name == "start")
                {
                    this.logo.setVisible(0);
                    this.start.setVisible(0);
                    this.p1.setVisible(1);
                    this.p2.setVisible(1);
                    this.p3.setVisible(1);
                    this.p4.setVisible(1);
                    this.choose.setVisible(1);
                    this.starts.play();
                }
///////////////////////////////////////////////////ESCENA TWEENS
                if(GameObject.name == "start1")
                {
                    this.logo.setVisible(0);
                    this.start.setVisible(0);
                    this.p1.setVisible(0);
                    this.p2.setVisible(0);
                    this.p3.setVisible(0);
                    this.p4.setVisible(0);
                    this.choose.setVisible(0);
                    this.start1.setVisible(0);
                    
                    this.chavabros.setVisible(1);
                    this.chavabros.setPosition(100,310);
                    this.chavabros.setScale(3);

                    this.planta.setVisible(1);
                    this.planta.setPosition(600,310);
                    this.planta.setScale(3);
                    this.planta.anims.play("movi2");

                    this.starts.play();
                    //this.chavabros.anims.remove("saludo")

                    this.lata = this.add.sprite(300,340,'Lata').setScale(.3);
                    this.sol1 = this.add.sprite(500,180,'sol').setScale(2);
                    this.sol2 = this.add.sprite(350,120,'sol').setScale(2);
                    this.sol3 = this.add.sprite(200,200,'sol').setScale(2);
                    this.sol4 = this.add.sprite(100,150,'sol').setScale(2);
                    this.sol1.anims.play('movi');
                    this.sol2.anims.play('movi');
                    this.sol3.anims.play('movi');
                    this.sol4.anims.play('movi');

                   
                   

                    this.tweens = this.add.tween({
                        targets: [this.sol1, this.sol2, this.sol3, this.sol4 /*this.yoshif*/],
                        //ease: 'Quart',
                        y:20, 
                        // x: {
                        //     value: 200,
                        //     ease: 'Elastic',
                        //     duration: 3000
                        //     },
                        setScale: 12,
                        repeat: -1,
                        duration: 1000,
                        yoyo:true,
                        
                    });


                     this.tweens = this.add.tween({
                         targets: [this.planta /*this.yoshif*/],
                         //ease: 'Quart',
                         y:150, 
                         // x: {
                         //     value: 200,
                         //     ease: 'Elastic',
                         //     duration: 3000
                         //     },
                        //setScale: 12,
                         repeat: -1,
                         duration: 1000,
                         yoyo:true,

                         onRepeat :() =>{
                            this.planta.setScale(2);
                        },
                        onYoyo:() =>{
                            this.planta.setScale(4.5);
                        },
                         onStar: () => {
                            console.log('Se completa el tween');
                            this.planta.setScale(2);
                            }

                        

                        
                     });

                    this.tweens = this.add.tween({
                        targets: [this.chavabros, /*this.yoshif*/],
                        //ease: 'Linear',
                        x: 500, 
                        // x: {
                        //     value: 200,
                        //     ease: 'Elastic',
                        //     duration: 3000
                        //     },
                        repeat: 0,
                        duration: 3000,
                        //yoyo = true,

                        onComplete: () => {
                            this.chavabros.anims.play("transformacion");
                            console.log('Se completa el tween');
                            
                            this.tweens = this.add.tween({
                                targets: [this.chavabros, /*this.yoshif*/],
                                //ease: 'Linear',
                                x: 100, 
                                // x: {
                                //     value: 200,
                                //     ease: 'Elastic',
                                //     duration: 3000
                                //     },
                                delay: 1000,
                                repeat: 0,
                                duration: 3000,
                                //yoyo = true,
        
                                onComplete: () => {
                                    this.chavabros.anims.play("poder");
                                    console.log('Se completa el tween');
                                    
                                    
                                    },
                            });


                            },
                    });
                    


                    // if(oa == 1)
                    // {
                    // this.tweens = this.add.tween({
                    //     targets: [this.chavabros, /*this.yoshif*/],
                    //     ease: 'Linear',
                    //     x: 100, 
                    //     // x: {
                    //     //     value: 200,
                    //     //     ease: 'Elastic',
                    //     //     duration: 3000
                    //     //     },
                    //     repeat: 0,
                    //     duration: 3000,

                    //     onComplete: () => {
                    //         this.chavabros.anims.play("poder");
                    //         console.log('Se completa el tween');
                    //         oa--;
                    //         console.log(oa);
                    //         }

                    // });
                    //}

                    

                   

                   



                }
            




                if(GameObject.name == "p1")
                {
                 this.anims.create({
                 key: 'seleccion1',
                 frames: this.anims.generateFrameNumbers('p1', {
                frames:[0, 1, 0],
                             }),
                 repeat: 3,
                 frameRate: 10
                });

                this.p1.anims.play('seleccion1');
                this.chavabros.setVisible(1);
                this.sol.setVisible(0);
                this.planta.setVisible(0);
                this.roboto.setVisible(0);
                this.start1.setVisible(1);

                this.p1.disableInteractive();
                this.p2.setInteractive();
                this.p3.setInteractive();
                this.p4.setInteractive();
    
                this.sel = 1;
                this.chavabros.anims.play('saludo');
                this.hellos.play();

              


                }




                if(GameObject.name == "p2")
                {
                    this.anims.create({
                        key: 'seleccion2',
                        frames: this.anims.generateFrameNumbers('p2', {
                       frames:[0, 1, 0],
                                    }),
                        repeat: 3,
                        frameRate: 10
                    });
                    this.p2.anims.play('seleccion2');
                    this.chavabros.setVisible(0);
                    this.sol.setVisible(1);
                    this.planta.setVisible(0);
                    this.roboto.setVisible(0);
                    this.start1.setVisible(0);

                    this.p1.setInteractive();
                    this.p2.disableInteractive();
                    this.p3.setInteractive();
                    this.p4.setInteractive();

                    this.sol.anims.play('movi');
                    this.fires.play();
                }
                if(GameObject.name == "p3")
                {
                    this.anims.create({
                        key: 'seleccion3',
                        frames: this.anims.generateFrameNumbers('p3', {
                       frames:[1, 0, 1],
                                    }),
                        repeat: 3,
                        frameRate: 10
                    });
                    this.p3.anims.play('seleccion3');
                    this.chavabros.setVisible(0);
                    this.sol.setVisible(0);
                    this.planta.setVisible(1);
                    this.roboto.setVisible(0);
                    this.start1.setVisible(0);
                    

                    this.p1.setInteractive();
                    this.p2.setInteractive();
                    this.p3.disableInteractive();
                    this.p4.setInteractive();

                    this.planta.anims.play('movi2');
                    this.plantas.play();
                }
                if(GameObject.name == "p4")
                {
                    this.anims.create({
                        key: 'seleccion4',
                        frames: this.anims.generateFrameNumbers('p4', {
                       frames:[0, 1, 0],
                                    }),
                        repeat: 3,
                        frameRate: 10
                    });
                    this.p4.anims.play('seleccion4');
                    this.chavabros.setVisible(0);
                    this.sol.setVisible(0);
                    this.planta.setVisible(0);
                    this.roboto.setVisible(1);
                    this.start1.setVisible(0);

                    this.p1.setInteractive();
                    this.p2.setInteractive();
                    this.p3.setInteractive();
                    this.p4.disableInteractive();

                    this.roboto.anims.play('movi3');
                    this.robotos.play();
                }
        
        
        console.log(this.sel);

        });


//BOTONES
//BOTON START
this.start.on(eventos.POINTER_MOVE, (evento) => {
    this.start.setScale(0.5);
    });
this.start.on(eventos.POINTER_OUT, (evento) => {
        this.start.setScale(0.4);
    });

//BOTON START1
this.start1.on(eventos.POINTER_MOVE, (evento) => {
    this.start1.setScale(0.5);
    });
this.start1.on(eventos.POINTER_OUT, (evento) => {
        this.start1.setScale(0.4);
    });

//BOTON CHAVA
 this.p1.on(eventos.POINTER_MOVE, (evento) => {
     this.p1.setScale(5);
     });
 this.p1.on(eventos.POINTER_OUT, (evento) => {
         this.p1.setScale(4);
     });

//BOTON SOL
this.p2.on(eventos.POINTER_MOVE, (evento) => {
    this.p2.setScale(5);
    });
this.p2.on(eventos.POINTER_OUT, (evento) => {
        this.p2.setScale(4);
    });


//BOTON PLANTA
this.p3.on(eventos.POINTER_MOVE, (evento) => {
    this.p3.setScale(5);
    });
this.p3.on(eventos.POINTER_OUT, (evento) => {
        this.p3.setScale(4);
    });

//BOTON ROBOTO
this.p4.on(eventos.POINTER_MOVE, (evento) => {
    this.p4.setScale(5);
    });
this.p4.on(eventos.POINTER_OUT, (evento) => {
        this.p4.setScale(4);
    });




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ANIMACIONES

///////////////CHAVA


//SALUDO

             this.anims.create({
                 // Nombre de la animación
                 key: 'saludo',
                 // Se cargan los frames por números
                 // NOTA: generateFrameNames() se
                 // usa cuando ya existe un Atlas
                 frames: this.anims.generateFrameNames('chavabros', {
                 prefix: 'saludo_',
                 frames: [1, 2, 3, 4, 5, 6, 5, 6, 5, 1]
                
                 }),
                 repeat: -1,
                 frameRate: 10
             });
//PODER
            this.anims.create({
                 // Nombre de la animación
                  key: 'poder',
                  // Se cargan los frames por números
                  // NOTA: generateFrameNames() se
                  // usa cuando ya existe un Atlas
                  frames: this.anims.generateFrameNames('chavabros', {
                  prefix: 'poder',
                  frames: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 7, 9, 6, 8, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
   
                  }),
                  repeat: 0,
                  frameRate: 10
             });



//TRANSFORMACION
            this.anims.create({
                    // Nombre de la animación
                     key: 'transformacion',
                     // Se cargan los frames por números
                     // NOTA: generateFrameNames() se
                     // usa cuando ya existe un Atlas
                     frames: this.anims.generateFrameNames('chavabros', {
                     prefix: 'super',
                     frames: [1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 6, 5, 4, 3, 2, 1]
   
                     }),
                     repeat: 0,
                     frameRate: 10
             });

///////////////SOL
            this.anims.create({
                    // Nombre de la animación
                     key: 'movi',
                     // Se cargan los frames por números
                     // NOTA: generateFrameNames() se
                     // usa cuando ya existe un Atlas
                     frames: this.anims.generateFrameNames('sol', {
                     prefix: 'l1_sol',
                     frames: [1, 2, 3, 4, 5, 2, 4, 5, 3, 1]

                     }),
                     repeat: -1,
                     frameRate: 10
             });

///////////////PLANTA

            this.anims.create({
                    // Nombre de la animación
                     key: 'movi2',
                     // Se cargan los frames por números
                     // NOTA: generateFrameNames() se
                     // usa cuando ya existe un Atlas
                     frames: this.anims.generateFrameNames('planta', {
                     prefix: 'l1_planta',
                     frames: [1, 2, 3, 4, 5, 4, 3, 4, 5]

                     }),
                     repeat: -1,
                     frameRate: 10
             });

///////////////ROBOTO

            this.anims.create({
                    // Nombre de la animación
                     key: 'movi3',
                     // Se cargan los frames por números
                     // NOTA: generateFrameNames() se
                     // usa cuando ya existe un Atlas
                     frames: this.anims.generateFrameNames('roboto', {
                     prefix: 'layer_',
                     frames: [1, 2, 3, 4, 5, 6, 4, 5, 6]

                     }),
                     repeat: -1,
                     frameRate: 10
             });


        //  this.tomato_spacing.anims.play('tomato_camina');
        //this.chavabros.anims.play('saludo');
        //this.tomato.anims.play('tomato_walk');
        
       // this.chavabros.anims.play('poder');
    

      
    

    console.log(this.chavabros.setVisible)
    this.teclaSpace = this.input.keyboard.addKey(keyCodes.SPACE);
    this.teclaSpace.on('down', () => {
    console.log('Has presionado la tecla Space');
    
                                     });


    this.combox1 = this.input.keyboard.createCombo(
    [keyCodes.UP, keyCodes.DOWN, keyCodes.RIGHT, keyCodes.LEFT],
    {resetOnMatch: true}
                                                 );
    this.combox2 = this.input.keyboard.createCombo(
    [keyCodes.DOWN, keyCodes.RIGHT, keyCodes.SHIFT],
    {resetOnMatch: true}
                                                 
                                                 );

     this.input.keyboard.on('keycombomatch',(event) =>
             {
                if(event.keyCodes == this.combox1.keyCodes)
                {
                    this.sel = 4;
                    console.log(this.sel);
                    this.chavabros.anims.play('poder');
                    console.log('Has hecho un combo')
                    this.sel = 1;
                    console.log(this.sel);
                    this.poders.play();
                    //this.chavabros.anims.play('saludo');
                }
                if(event.keyCodes == this.combox2.keyCodes)
                {
                    this.chavabros.anims.play('transformacion');
                    console.log('Eres Super Chava')
                    this.supers.play();
                    //this.chavabros.anims.play('saludo');
                }
             });
           
       
    
    }


    update(time, delta) {
        console.log(this.chavabros.x);
        
    }
}

export default Bootloader;