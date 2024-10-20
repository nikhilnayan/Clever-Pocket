import { InferRequestType, InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { client } from "@/lib/hono";
import { toast } from "sonner";

type ResponseType = InferResponseType<typeof client.api.transactions[":id"]["$delete"]>
type RequestType = InferRequestType<typeof client.api.transactions[":id"]["$delete"]>;

export const useDeleteTransaction = (id?: string) => {
    const queryClient = useQueryClient()

    const mutation = useMutation<
        // void,
        ResponseType,
        Error,
        string,
        RequestType
    >({
        mutationFn: async (id: string) => {

            const response = await client.api.transactions[":id"]["$delete"]({ param: { id } })
            return await response.json()

        },
        onSuccess: () => {
            toast.success("Transaction Deleted")
            queryClient.invalidateQueries({ queryKey: ["transaction"] })
            queryClient.invalidateQueries({ queryKey: ["transactions"] })
            queryClient.invalidateQueries({ queryKey: ["summary"] })
        },
        onError: (error) => {
            console.error(error)
            toast.error("Failed to delete transaction")
        },
    })
    return mutation
}