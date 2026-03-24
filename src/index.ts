/**
 * Keyva — TypeScript client for the Keyva Credential management server.
 *
 * Auto-generated from keyva protocol spec. Do not edit.
 *
 * @example
 * ```ts
 * import { KeyvaClient } from "keyva-client";
 *
 * const client = await KeyvaClient.connect("keyva://://localhost");
 * const result = await client.issue("my-keyspace", { ttlSecs: 3600 });
 * console.log(result.credentialId, result.token);
 * client.close();
 * ```
 */

export { KeyvaClient } from "./client";
export { KeyvaError } from "./errors";
export type { ConfigGetResponse, HealthResponse, InspectResponse, IssueResponse, JwksResponse, KeysResponse, KeystateResponse, PasswordChangeResponse, PasswordImportResponse, PasswordSetResponse, PasswordVerifyResponse, RefreshResponse, RevokeResponse, RevokeBulkResponse, RevokeFamilyResponse, RotateResponse, SchemaResponse, VerifyResponse } from "./types";
export { BadargError, ChainLimitError, CryptoError, DeniedError, DisabledError, ExpiredError, InternalError, LockedError, NotfoundError, NotreadyError, ReuseDetectedError, StateErrorError, StorageError, ValidationErrorError, WrongtypeError } from "./errors";
