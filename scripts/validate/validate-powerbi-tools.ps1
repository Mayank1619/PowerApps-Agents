$ErrorActionPreference = 'Stop'

$findings = [System.Collections.Generic.List[string]]::new()
$failed = $false

$code = Get-Command 'code-insiders' -ErrorAction SilentlyContinue
if (-not $code) {
    $code = Get-Command 'code' -ErrorAction SilentlyContinue
}

if (-not $code) {
    $findings.Add('FAIL: VS Code CLI not found.')
    $failed = $true
} else {
    $findings.Add("PASS: VS Code CLI found at $($code.Source).")
    $extensionOutput = & $code.Source --list-extensions --show-versions 2>$null
    if ($LASTEXITCODE -ne 0) {
        $findings.Add('UNVERIFIED: VS Code extension inventory command failed.')
        $failed = $true
    } else {
        $powerBiExtension = $extensionOutput | Where-Object { $_ -match '^analysis-services\.powerbi-modeling-mcp@' }
        $copilotExtension = $extensionOutput | Where-Object { $_ -match '^github\.copilot-chat@' }
        if ($powerBiExtension) {
            $findings.Add("PASS: Power BI MCP extension listed: $($powerBiExtension -join ', ').")
        } else {
            $findings.Add('FAIL: Power BI Authoring MCP extension is not listed for this VS Code profile.')
            $failed = $true
        }
        if ($copilotExtension) {
            $findings.Add("PASS: GitHub Copilot Chat extension listed: $($copilotExtension -join ', ').")
        } else {
            $findings.Add('FAIL: GitHub Copilot Chat extension is not listed for this VS Code profile.')
            $failed = $true
        }
    }
}

$desktopPaths = @(
    'C:\Program Files\Microsoft Power BI Desktop\bin\PBIDesktop.exe',
    'C:\Program Files (x86)\Microsoft Power BI Desktop\bin\PBIDesktop.exe'
)
$desktop = Get-Command 'PBIDesktop' -ErrorAction SilentlyContinue
if ($desktop -or ($desktopPaths | Where-Object { Test-Path $_ })) {
    $findings.Add('PASS: Power BI Desktop executable detected.')
} else {
    $findings.Add('FAIL: Power BI Desktop was not found at the checked paths.')
    $failed = $true
}

$findings | ForEach-Object { Write-Output $_ }
Write-Output 'INFO: This checker does not start MCP, authenticate, inspect models, or change configuration.'
if ($failed) {
    exit 1
}