import { DAppClient, TezosOperationType } from "@airgap/beacon-sdk";

const buyTicket = async (dAppClient: DAppClient, userAddress: string)=>{
  console.log(userAddress)
  try {
    const result = await dAppClient.requestOperation({
      operationDetails: [
        {
          kind: TezosOperationType.TRANSACTION,
          amount: "0",
          destination: "KT1Q8c6ZFoxG8f4cQEHpamirD2SQijXL8pNH",
          parameters: {
            entrypoint: "buy_ticket",
            value: {
              prim: 'Pair',
              args: [
                { string: 'Concert' },
                { int: "1"}
              ]
            }
          },
        },
      ],
    });
  
    console.log(result);
  } catch (error) {
    console.error(
      `The contract call failed and the following error was returned:`,
      error?.data[1]?.with?.string,
    );
  }
}

export default buyTicket;