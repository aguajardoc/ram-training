import type { Module, ModuleProblem } from "generated/prisma";
import type { DateTime } from "next-auth/providers/kakao";

type Props = {
    name: string,
    launchDate: Date,
    hidden: Boolean,
    moduleProblems: ModuleProblem[],
};

function AdminModuleDisplay({ name, launchDate, hidden, moduleProblems } : Props) {
    return (
        <>
            {/* Add problems to module */}
            {/* Remove problems from module */}
            {/* Edit difficulty parameters per problem */}
            {/* Reorder problems */}
            {/* Set launch date */}
            {/* Rename module */}
            {/* Delete module */}
            {/* Hide module */}
        </>
    )
}

export default AdminModuleDisplay;