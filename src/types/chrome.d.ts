/// <reference types="chrome" />

export {};

declare global {
  interface Window {
    chrome?: {
      runtime?: {
        id?: string;
      };
    };
  }
}
