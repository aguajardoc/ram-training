import type { Module } from "generated/prisma";

type Props = {
    modules: Module[],
};

function ModulePanel({ modules } : Props) {
    return(
        <>
            <h1 className="title">
                MODULES
            </h1>
            {/* MODULE ACTIONS */}
                {/* Create module */}
                {/* Add problems to module */}
                {/* Remove problems from module */}
                {/* Hide problems from module */}
                {/* Edit difficulty parameters per problem */}
                {/* Reorder problems */}
                {/* Set launch date */}
                {/* Rename module */}
                {/* Delete module */}
                {/* Hide module */}
        </>
    )
}

export default ModulePanel;