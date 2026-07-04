interface Greeting {
  message: string;
  timestamp: string;
}

function printHelloWorld(user: string): void {
  const greeting: Greeting = {
    message: `Hello World! Developer ${user} is ready for CSE 310.`,
    timestamp: new Date().toLocaleTimeString(),
  };

  console.log("========================================");
  console.log(greeting.message);
  console.log(`Execution Time: ${greeting.timestamp}`);
  console.log("========================================");
}

printHelloWorld("Bryan Santana");
