// Tag-inserter/extension.ts
// Author: Szymon 'l7ssha' Uglis
'use strict';

import { window, commands, Disposable, ExtensionContext, StatusBarAlignment, StatusBarItem, TextDocument, TextDocumentSaveReason } from 'vscode';
import * as inserter from './tagInserter';

export function activate(context: ExtensionContext) {
    let insertTag = commands.registerCommand('l7ssha.insertTag', inserter.insertTag);

    context.subscriptions.push(insertTag);
}

export function deactivate() {
}
