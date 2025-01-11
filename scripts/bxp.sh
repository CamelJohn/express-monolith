#!/usr/bin/env bash

run_command() {
    case "$1" in
        init)
            ./scripts/init.sh "${@:2}"
            ;;
        cleanup)
            ./scripts/cleanup.sh "${@:2}"
            ;;
        add:module)
            ./scripts/add-module.sh "${@:2}"
            ;;
        *)
            echo "Invalid command"
            exit 1
            ;;
    esac
}

run_command "$@"