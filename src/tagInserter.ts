// Tag-inserter/extension.ts
// Author: Szymon 'l7ssha' Uglis
import * as vscode from 'vscode';

export async function insertTag() {
    const document_lang = vscode.window.activeTextEditor.document.languageId;
    if (document_lang  != "html"){
        error("The file must be html file.");
        return;
    }

    const tag = await vscode.window.showInputBox();

    if(tag == null && tag.trim() != "") {
        error("No empty tags permited!");
        return;
    }

    let selection = vscode.window.activeTextEditor.selection;

    if(!selection.isEmpty) {
        vscode.window.activeTextEditor.edit(builder => {
            builder.replace(selection, getInsertText(vscode.window.activeTextEditor.document.getText(selection), tag));
        });
    }
    else {
        error("Your selection is empty!");
        return;
    }

};

// Some regex stuff.
export function getInsertText(selection: string, tag: string) {
    const regexPattern = /(\w+).([A-Za-z])\w+=\"([^"]*)\"/;

    if(regexPattern.test(tag))
    {
        const t = tag.split(" ", 1);
        return "<" + tag +">" + selection + "</" + t[0] + ">";
    }
    else
         return "<" + tag +">" + selection + "</" + tag + ">";
}

function error(text: string){
    vscode.window.showErrorMessage(text);
}
