package cmd

import (
	"linkandroid-cli/internal"

	"github.com/spf13/cobra"
)

var devicesCmd = &cobra.Command{
	Use:   "devices",
	Short: "List all connected Android devices",
	RunE: func(cmd *cobra.Command, args []string) error {
		cfg, err := internal.LoadAuthConfig()
		if err != nil {
			return err
		}
		result, err := internal.DoRequest(cfg, "/api/devices", map[string]any{})
		if err != nil {
			return err
		}
		return internal.PrintJSON(result)
	},
}
