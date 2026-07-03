# Security Policy

## Reporting Security Issues

If you discover a security vulnerability, please email security@xenon.dev instead of using the issue tracker.

## Supported Versions

| Version | Supported |
|---------|-----------|
| 1.0.x   | ✅ Yes    |
| 0.9.x   | ❌ No     |
| < 0.9   | ❌ No     |

## Security Considerations

### Client-Side Security
- No sensitive data stored in localStorage
- XSS protection through DOM APIs
- CSRF tokens for API calls (future)

### Data Privacy
- No personal data collected
- No tracking or analytics (optional)
- No third-party scripts

### Code Security
- Regular dependency updates
- Code review process
- Security testing

## Best Practices

1. Keep browser updated
2. Use HTTPS for all connections
3. Clear browser cache regularly
4. Don't share save files
5. Report suspicious behavior
