import {ApiResponse, HTTPMethod, IApiStore, RequestParams, StatusHTTP} from "./types";
import qs from 'qs'

export default class ApiStore implements IApiStore {
    baseUrl

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl
    }

    private getRequestData<ReqT>(params: RequestParams<ReqT>): [string, RequestInit] {
        let endpoint = `${this.baseUrl}${params.endpoint}`
        const req: RequestInit = {
            headers: {...params.headers},
            method: params.method
        }
        if (params.method === HTTPMethod.GET) {
            endpoint = `${endpoint}?${qs.stringify(params.data)}`
        }
        if (params.method === HTTPMethod.POST) {
            req.body = JSON.stringify(params.data)
            req.headers = {
                ...req.headers,
                'Content-Type': 'application/json;charset=utf-8'
            }
        }
        return [endpoint, req]
    }

    async request<SuccessT, ErrorT = any, ReqT = {}>(params: RequestParams<ReqT>): Promise<ApiResponse<SuccessT, ErrorT>> {
        try {
            const res = await fetch(...this.getRequestData(params))

            if (res.ok) {
                return {
                    success: true,
                    data: await res.json(),
                    status: res.status
                }
            }
            return {
                success: false,
                status: res.status,
                data: await res.json()
            }
        } catch (e) {
            return {
                success: false,
                status: StatusHTTP.BAD_GATEWAY,
                data: null
            }
        }
    }
}