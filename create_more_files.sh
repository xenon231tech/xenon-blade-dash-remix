#!/bin/bash

# Create CODEOWNERS
cat > CODEOWNERS << 'DOC'
# Code Owners for Blade Dash Remix
# This file defines code ownership and review requirements

* @xenon231tech

# Game mechanics
src/entities/ @xenon231tech
src/systems/ @xenon231tech

# Documentation
docs/ @xenon231tech

# Configuration
config/ @xenon231tech
*.json @xenon231tech
