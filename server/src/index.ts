
import { initGraphqlServer } from "./app";

async function initServer() {
    const app = await initGraphqlServer()
    app.listen(8000, () => console.log("server running on port 8000"))


}

initServer()