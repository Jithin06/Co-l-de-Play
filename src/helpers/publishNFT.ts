import { DAppClient, TezosOperationType } from "@airgap/beacon-sdk";
import toast from "react-hot-toast";

const publishNFT = async (dAppClient: DAppClient, token_id: number) => {
    try {
        const result = await dAppClient.requestOperation({
            operationDetails: [
                {
                    kind: TezosOperationType.TRANSACTION,
                    amount: "0",
                    destination: "KT1KzMkhBqzQgPY9HHUjhDUBgs5XZ5hLY2F4",
                    parameters: {
                        entrypoint: "publish_nft",
                        value: {
                            int: token_id.toString()
                        },
                    },
                },
            ],
        });

        console.log(result);
        toast.success("Your ticket has been added to the market!");
    } catch (error) {
        console.error(`The contract call failed and the following error was returned:`, error);
        toast.error("An error has occured");
    }
};

export default publishNFT;