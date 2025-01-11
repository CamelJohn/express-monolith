#!/usr/bin/env bash

run_command() {
    case "$1" in
        init)
            $(pwd)/node_modules/bxp/scripts/init.sh "${@:2}"
            ;;
        cleanup)
            $(pwd)/node_modules/bxp/scripts/cleanup.sh "${@:2}"
            ;;
        add:module)
            $(pwd)/node_modules/bxp/scripts/add-module.sh "${@:2}"
            ;;
        *)
            echo "Invalid command"
            exit 1
            ;;
    esac
}

run_command "$@"