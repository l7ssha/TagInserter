import * as assert from 'assert';

import * as vscode from 'vscode';
import * as inserter from '../tagInserter';

suite("Extension Tests", () => {
    test("Simple Insertion", () => {
        let mockData = "<div>TEST</div>";
        assert.equal(mockData, inserter.getInsertText("TEST", "div"));
    });

    test("Inserting with classes", () => {
        let mockData = "<div class=\"container\">TEST</div>";
        assert.equal(mockData, inserter.getInsertText("TEST", "div class=\"container\""));
    });

    test("Inserting blank should fail", () => {
        let mockData = "<div class=\"container\">TEST</div>";
        assert.notEqual(mockData, inserter.getInsertText("TEST", ""))
    });
});