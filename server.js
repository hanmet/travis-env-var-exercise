const CUSTOM_ENV_VAR = process.env.CUSTOM_ENV_VAR;


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("Microservices rock!");
    console.log(`Custom environment variable is: ${CUSTOM_ENV_VAR}`);
    await sleep(5000);
  }
}

main();
