class Security {

    constructor(){

        this.input1 = createInput("Code1")
        this.input1.position(100,90);
        this.input1.style('background', 'white');  

        this.button1 = createButton('Enter');
        this.button1.position(100,120);
        this.button1.style('background', 'lightgrey');    

        this.input2 = createInput("Code1")
        this.input2.position(700,190);
        this.input2.style('background', 'white');  

        this.button2 = createButton('Enter');
        this.button2.position(700,220);
        this.button2.style('background', 'lightgrey');

        this.input3 = createInput("Code1")
        this.input3.position(100,290);
        this.input3.style('background', 'white');  

        this.button3 = createButton('Enter');
        this.button3.position(100,320);
        this.button3.style('background', 'lightgrey'); 
    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(Code1,this.input1.value())){
                this.button1.hide();
                this.input1.hide();
                score++;
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(Code2,this.input2.value())){
                this.button2.hide();
                this.input2.hide();
                score++;
            }
        });

        this.button3.mousePressed(() => {
            if(system.authenticate(Code3,this.input3.value())){
                this.button3.hide();
                this.input3.hide();
                score++;
            }
        });

    }
}