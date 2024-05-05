import crypto from "crypto";

const buffer = Buffer.alloc(256); // Allocate a buffer for 256 bytes
crypto.randomFillSync(buffer);     // Fill the buffer with random bytes

const token = buffer.toString('base64'); // Convert to base64 string

console.log(token);