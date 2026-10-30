$ErrorActionPreference = 'Stop'

$findings = [System.Collections.Generic.List[string]]::new()
$failed = $false

foreach ($name in @('node', 'az', 'pac')) {
    $command = Get-Command $name -ErrorAction SilentlyContinue
    if ($command) {
        $findings.Add("PASS: $name command found at $($command.Source).")
    } else {
        $findings.Add("FAIL: $name command not found.")
        $failed = $true
    }
}

$copilot = Get-Command 'copilot' -ErrorAction SilentlyContinue
if (-not $copilot) {
    $findings.Add('FAIL: GitHub Copilot CLI command not found.')
    $failed = $true
} elseif ($copilot.Source -match '(?i)copilot-shim') {
    $findings.Add('FAIL: copilot resolves to a VS Code shim, not GitHub Copilot CLI.')
    $failed = $true
} else {
    $findings.Add("PASS: copilot command found at $($copilot.Source); verify its official version/help before use.")
}

$pluginRoot = Join-Path $env:USERPROFILE '.copilot\installed-plugins'
if (Test-Path $pluginRoot -PathType Container) {
    $pluginServer = Get-ChildItem $pluginRoot -Recurse -File -Filter 'mcp.mjs' -ErrorAction SilentlyContinue |
        Where-Object { $_.Directory.Name -eq 'power-automate' } |
        Select-Object -First 1
    if ($pluginServer) {
        $findings.Add('PASS: Power Automate plugin MCP bundle found in the Copilot installed-plugins directory.')
    } else {
        $findings.Add('FAIL: no Power Automate plugin MCP bundle found in the Copilot installed-plugins directory.')
        $failed = $true
    }
} else {
    $findings.Add('FAIL: Copilot installed-plugins directory not found.')
    $failed = $true
}

$findings | ForEach-Object { Write-Output $_ }
Write-Output 'INFO: This checker does not run az login, pac authentication, list resources, start MCP, or modify configuration.'
if ($failed) {
    exit 1
}