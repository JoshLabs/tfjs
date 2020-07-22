/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

/**
 * This file creates a TypeScript module that exports the contents of the Emscripten-generated WASM worker script so that it can be inlined by the tf-backend-wasm bundle.
 */

const fs = require('fs');

const workerContents = fs.readFileSync('./wasm-out/tfjs-backend-wasm-threaded-simd.worker.js', "utf8");

const fileContents = `export const wasmWorkerContents = '${workerContents.trim()}';`;

fs.writeFileSync('./wasm-out/tfjs-backend-wasm-threaded-simd.worker.ts', fileContents);