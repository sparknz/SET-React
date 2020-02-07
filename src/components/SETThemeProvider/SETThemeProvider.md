### Usage

The `SETThemeProvider` provide styled-components in your application with the color/layout/sizing tokens for the specific chosen theme.

You usually only need to use the `SETThemeProvider` once, and that is at the root element of your project:

```jsx static
class App extends Page {
    render() {
        return <SparkTheme>{/*Your app goes here*/}</SparkTheme>;
    }
}
```
