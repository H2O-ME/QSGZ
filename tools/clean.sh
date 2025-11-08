#!/bin/bash
echo "Cleaning build artifacts..."

# Remove dist directory
if [ -d "dist" ]; then
    rm -rf dist
    echo "Removed dist directory"
fi

# Remove node_modules if requested
if [ "$1" = "--all" ]; then
    if [ -d "node_modules" ]; then
        rm -rf node_modules
        echo "Removed node_modules directory"
    fi
fi

echo "Clean completed!"