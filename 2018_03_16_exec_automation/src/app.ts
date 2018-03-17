class App {
    public start() {
        console.log("Starting application...");
    }

    public testVariableDeclarationsAndTypes() {
        let a: number = 10;
        console.log("a = " + a);

        for (let i:number = 0; i < 10; i++) {
            console.log("i = " + i);
        }
        
        console.log("Exiting...");
    }
}

const app = new App();
app.start();
app.testVariableDeclarationsAndTypes();

