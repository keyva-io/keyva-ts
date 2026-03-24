/**
 * Keyva error types.
 *
 * Auto-generated from keyva protocol spec. Do not edit.
 */

export class KeyvaError extends Error {
  constructor(
    public readonly code: string,
    public readonly detail: string,
  ) {
    super(`[${code}] ${detail}`);
    this.name = "KeyvaError";
  }

  /** @internal Construct the appropriate error subclass from a server error. */
  static _fromServer(code: string, detail: string): KeyvaError {
    const Factory = ERROR_MAP[code] ?? KeyvaError;
    return new Factory(code, detail);
  }
}

/** Missing or malformed command argument */
export class BadargError extends KeyvaError {
  constructor(code: string, detail: string) {
    super(code, detail);
    this.name = "BadargError";
  }
}

/** Refresh token chain limit exceeded */
export class ChainLimitError extends KeyvaError {
  constructor(code: string, detail: string) {
    super(code, detail);
    this.name = "ChainLimitError";
  }
}

/** Cryptographic operation failed */
export class CryptoError extends KeyvaError {
  constructor(code: string, detail: string) {
    super(code, detail);
    this.name = "CryptoError";
  }
}

/** Authentication required or insufficient permissions */
export class DeniedError extends KeyvaError {
  constructor(code: string, detail: string) {
    super(code, detail);
    this.name = "DeniedError";
  }
}

/** Keyspace is disabled */
export class DisabledError extends KeyvaError {
  constructor(code: string, detail: string) {
    super(code, detail);
    this.name = "DisabledError";
  }
}

/** Credential has expired */
export class ExpiredError extends KeyvaError {
  constructor(code: string, detail: string) {
    super(code, detail);
    this.name = "ExpiredError";
  }
}

/** Unexpected internal error */
export class InternalError extends KeyvaError {
  constructor(code: string, detail: string) {
    super(code, detail);
    this.name = "InternalError";
  }
}

/** Account temporarily locked due to too many failed attempts */
export class LockedError extends KeyvaError {
  constructor(code: string, detail: string) {
    super(code, detail);
    this.name = "LockedError";
  }
}

/** Credential, keyspace, or resource does not exist */
export class NotfoundError extends KeyvaError {
  constructor(code: string, detail: string) {
    super(code, detail);
    this.name = "NotfoundError";
  }
}

/** Server is not ready (still starting up) */
export class NotreadyError extends KeyvaError {
  constructor(code: string, detail: string) {
    super(code, detail);
    this.name = "NotreadyError";
  }
}

/** Refresh token reuse detected — family revoked */
export class ReuseDetectedError extends KeyvaError {
  constructor(code: string, detail: string) {
    super(code, detail);
    this.name = "ReuseDetectedError";
  }
}

/** Credential is in wrong state for this operation */
export class StateErrorError extends KeyvaError {
  constructor(code: string, detail: string) {
    super(code, detail);
    this.name = "StateErrorError";
  }
}

/** Storage engine error */
export class StorageError extends KeyvaError {
  constructor(code: string, detail: string) {
    super(code, detail);
    this.name = "StorageError";
  }
}

/** Metadata or claims failed schema validation */
export class ValidationErrorError extends KeyvaError {
  constructor(code: string, detail: string) {
    super(code, detail);
    this.name = "ValidationErrorError";
  }
}

/** Operation not supported for this keyspace type */
export class WrongtypeError extends KeyvaError {
  constructor(code: string, detail: string) {
    super(code, detail);
    this.name = "WrongtypeError";
  }
}

const ERROR_MAP: Record<string, typeof KeyvaError> = {
  "BADARG": BadargError,
  "CHAIN_LIMIT": ChainLimitError,
  "CRYPTO": CryptoError,
  "DENIED": DeniedError,
  "DISABLED": DisabledError,
  "EXPIRED": ExpiredError,
  "INTERNAL": InternalError,
  "LOCKED": LockedError,
  "NOTFOUND": NotfoundError,
  "NOTREADY": NotreadyError,
  "REUSE_DETECTED": ReuseDetectedError,
  "STATE_ERROR": StateErrorError,
  "STORAGE": StorageError,
  "VALIDATION_ERROR": ValidationErrorError,
  "WRONGTYPE": WrongtypeError,
};
