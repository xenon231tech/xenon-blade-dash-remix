# Performance Optimization Guide

## Rendering Optimization
- Use dirty rect optimization
- Batch similar draw calls
- Use requestAnimationFrame
- Avoid layout thrashing

## Memory Management
- Object pooling for particles
- Reuse entity objects
- Clear references on cleanup
- Monitor memory usage

## Physics Optimization
- Spatial partitioning (quad-tree)
- Broad-phase collision detection
- Early exit on collision checks
- Cache distance calculations

## Audio Optimization
- Pre-load audio files
- Use audio sprites
- Limit concurrent sounds
- Compress audio files

## Profiling Tips
- Use Chrome DevTools Performance tab
- Monitor FPS with stats.js
- Profile memory with heap snapshots
- Identify bottlenecks with flame graphs
