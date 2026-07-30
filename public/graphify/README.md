# Graphify Knowledge Graph

This directory stores the Graphify-generated knowledge graph files.

## What is Graphify?

**Graphify** (90K+ ⭐) is an AI coding assistant skill that converts codebases into queryable knowledge graphs:
- GitHub: https://github.com/safishamsi/graphify
- Official: https://graphify.labs.ai

## How to Generate the Graph

Run these commands in the project root (`python-quest/`):

```bash
# Install Graphify (PyPI package name has double 'y')
pip install graphifyy

# Register to your AI coding assistant
graphify install

# Generate the knowledge graph (takes ~3 seconds)
graphify .

# Move generated files here
mv graphify-out/* public/graphify/
```

## Output Files

After running `graphify .`, you'll get:

- **graph.html** - Interactive visualization (click nodes to expand, filter)
- **graph.json** - Structured data
- **graph_report.md** - Summary report

## Integration

The Home page has a "知识图谱" button that links to `/python-web-try/graphify/graph.html`.

## Benefits

- Token savings: 71.5x reduction compared to raw context
- Visual code understanding: see relationships between modules
- Queryable graph: ask AI questions about your codebase structure

## Technical Details

- Uses tree-sitter AST for local parsing
- Leiden graph algorithm for community detection
- Works with: Claude Code, Codex, OpenCode, Cursor, Gemini CLI, and 50+ AI tools